const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      // each time you open a new environment,check to make sure this is the same URL
      // do not include "/" at the end!
      // front URL is port 3000
      current_front_url:
        "https://3000-lalafontaine-alive-i68w9srmd07.ws-us90.gitpod.io",
      // back URL is port 3001
      current_back_url: process.env.BACKEND_URL,

      latitude: null, //to store user location
      longitude: null, //to store user location
      token: null,
      is_org: null,
      name: null,
      avatarID: null,
      avatarImages: [
        "fas fa-robot",
        "fas fa-robot",
        "fas fa-robot",
        "fas fa-robot",
        "fas fa-robot",
        "fas fa-robot",
      ],
      favorites: [],
      searchResults: [],
      filteredResults: [],
      checked: false,
    },
    actions: {
      login: async (email, password) => {
        const current_back_url = getStore().current_back_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const response = await fetch(current_back_url + "/api/login", opts);
          if (response.status !== 200) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          console.log("data =", data);
          sessionStorage.setItem("token", data.access_token);
          sessionStorage.setItem("is_org", data.is_org);
          sessionStorage.setItem("name", data.name);
          let favoriteNames = [];
          data.favorites.forEach((favorite, index) => {
            favoriteNames.push({
              name: favorite.name,
              icon: data.icons[index],
            });
          });
          setStore({
            token: data.access_token,
            is_org: data.is_org,
            avatarID: data.avatar,
            name: data.name,
            favorites: favoriteNames,
          });
          console.log("AVATAR ID", getStore().avatarID);
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      createUser: async (is_org, name, email, password, userAvatar) => {
        const current_back_url = getStore().current_back_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            is_org: is_org,
            name: name,
            email: email,
            password: password,
            userAvatar: userAvatar,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createUser",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        const current_front_url = getStore().current_front_url;
        const token = sessionStorage.removeItem("token");
        const is_org = sessionStorage.removeItem("is_org");
        const name = sessionStorage.removeItem("name");
        setStore({ token: null, is_org: null, name: null });
        window.location.href = current_front_url + "/";
      },
      createResource: async (
        name,
        schedule,
        website,
        phone,
        address,
        resourceType,
        picture,
        description
        //, user_id
      ) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const token = getStore().token;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            schedule: schedule,
            website: website,
            phone: phone,
            address: address,
            category: resourceType,
            picture: picture,
            description: description,
            // user_id: user_id,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createResource",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
            window.location.href = current_front_url + "/";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      updateLocation: (latitude, longitude) => {
        setStore({ latitude: latitude, longitude: longitude });
      },

      addFavorite: (resource) => {
        const current_back_url = getStore().current_back_url;
        const favorites = getStore().favorites;
        const token = sessionStorage.getItem("token");
        // console.log(resource);
        if (sessionStorage.getItem("token")) {
          const opts = {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              name: resource.name,
            }),
          };
          fetch(current_back_url + "/api/addFavorite", opts)
            .then((response) => response.json())
            .then((data) => {
              if (data.message == "okay") {
                favorites.push(resource);
                setStore({ favorites: favorites });
              }
            });
        }
      },
      removeFavorite: (resourceName) => {
        const current_back_url = getStore().current_back_url;
        const favorites = getStore().favorites;
        const token = getStore().token;
        if (sessionStorage.getItem("token")) {
          const opts = {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            method: "DELETE",
            body: JSON.stringify({
              name: resourceName,
            }),
          };
          fetch(current_back_url + "/api/removeFavorite", opts)
            .then((response) => response.json())
            .then((data) => {
              if (data.message == "okay") {
                favorites.forEach((element, index) => {
                  if (element == resourceName) {
                    favorites.splice(index, 1);
                  }
                });
                setStore({ favorites: favorites });
              }
            })
            .catch((error) => console.log(error));
        }
      },

      setSearchResults: () => {
        const searchResults = getStore().searchResults;
        fetch(getStore().current_back_url + "/api/getResources")
          .then((response) => response.json())
          .then((data) => setStore({ searchResults: data.data }))
          .catch((error) => console.log(error));
      },

      filterSearchResults: (when, categorySearch) => {
        const searchResults = getStore().searchResults;
        const filteredResults = getStore().filteredResults;
        // setStore({ filteredResults: [] });
        searchResults.forEach((item, index) => {
          // console.log(item.schedule);
          console.log("type of ", typeof item.schedule);
          if (
            !when.length &&
            (item.category == categorySearch[1] ||
              item.category.includes(categorySearch[2]) ||
              item.category.includes(categorySearch[3]) ||
              item.category.includes(categorySearch[4]))
          ) {
            setStore({ filteredResults: [] });
            // console.log("%cOnly category", "color: green; font-size: 2rem;");

            filteredResults.push(item);
            let newResults = [...new Set(filteredResults)];
            setStore({ filteredResults: newResults });
          } else if (
            // console.log(item.schedule, !categorySearch[1]) &&
            !categorySearch[1] &&
            item.schedule.some((scheduleItem) => {
              // console.log("this is when from if statement", when);
              return when.includes(scheduleItem.day.toLowerCase());
            })
          ) {
            setStore({ filteredResults: [] });
            // console.log("%cOnly day", "color: green; font-size: 2rem;");
            // console.log(filteredResults);
            // console.log("item schedule from day only is", item.schedule);
            filteredResults.push(item);
            let newResults = [...new Set(filteredResults)];
            setStore({ filteredResults: newResults });
          }
        });
        if (when.length && categorySearch[1]) {
          let filteredResults = getStore().filteredResults;
          filteredResults = [];
          setStore({ filteredResults: filteredResults });
          const cleared = [];
          // setStore({ filteredResults: "123" });
          console.log("filteredREsults is clear! I hope", filteredResults);
          console.log(
            "from when and category when length and categorySearch[1]",
            when.length,
            categorySearch[1]
          );
          searchResults.forEach((item, index) => {
            let day = item.schedule[0].day.toLowerCase();
            console.log(day);
            let category = item.category;
            if (
              (day == when[0] ||
                day == when[1] ||
                day == when[2] ||
                day == when[3] ||
                day == when[4] ||
                day == when[5] ||
                day == when[6]) &&
              (category == categorySearch[1] ||
                category == categorySearch[2] ||
                category == categorySearch[3] ||
                category == categorySearch[4])
            ) {
              console.log(item, category);
              let newArray = filteredResults;
              newArray.push(item);
              setStore({ filteredResults: newArray });
              console.log("new array is", newArray);
            }
          });
        }
      },
      resetSearchResults: () => {
        const filteredResults = getStore().filteredResults;
        let newArray = [];
        setStore({ filteredResults: newArray, checked: false });
      },
      setChecked: (checked) => {
        const storeChecked = getStore().checked;
        let newChecked = checked;
        setStore({ checked: newChecked });
      },
      createComment: async (
        resource_id,
        comment_cont,
        // created_at,
        parentId
      ) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const token = getStore().token;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            resource_id: resource_id,
            comment_cont: comment_cont,
            // created_at: created_at,
            parentId: parentId,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createComment",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          // if (data.status == "true") {
          //   window.location.href = current_front_url + "/";
          // }
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      getComments: (resource_id) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const opts = {
          method: "POST",
          body: JSON.stringify({ resource_id: resource_id }),
          headers: {
            "Content-Type": "application/json",
          },
        };

        return fetch(current_back_url + "/api/getcomments", opts)
          .then((res) => res.json())
          .then((data) => {
            console.log("this is from get_comments", data);
            return data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      // each time you open a new environment, match this URL (port 3000)
      // do not include "/" at the end!
      current_front_url:
        "https://3000-lalafontaine-alive-k05q6ejs53w.ws-eu93.gitpod.io",
      current_back_url: process.env.BACKEND_URL,
      latitude: null, //to store user location
      longitude: null, //to store user location
      token: null,
      is_org: null,
      name: null,
      avatarID: null,
      avatarImages: [
        "fas fa-robot",
        "fas fa-user-astronaut",
        "fas fa-user-ninja",
        "fas fa-snowman",
        "fas fa-user-secret",
        "fas fa-hippo",
      ],
      favorites: [],
      searchResults: [],
      filteredResults: [],
      offerings: [],
      checked: false,
      commentsList: [],
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
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("is_org");
        sessionStorage.removeItem("name");
        setStore({ token: null, is_org: null, name: null });
        window.location.href = current_front_url + "/";
      },
      createResource: async (
        name,
        address,
        phone,
        resourceType,
        website,
        description,
        latitude,
        longitude,
        picture,
        picture2,
        mondayStart,
        mondayEnd
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
            address: address,
            phone: phone,
            category: resourceType,
            website: website,
            description: description,
            latitude: latitude,
            longitude: longitude,
            image: picture,
            image2: picture2,
            mondayStart: mondayStart,
            mondayEnd: mondayEnd,
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
          // if (data.status == "true") {
          //   window.location.href = current_front_url + "/search/all"; //go to home
          // }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      createDrop: async (
        name,
        address,
        phone,
        description,
        type,
        identification,
        image
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
            address: address,
            phone: phone,
            description: description,
            type: type,
            identification: identification,
            image: image,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createDrop",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          // if (data.status == "true") {
          //   window.location.href = current_front_url + "/search/all"; //go to home
          // }
          return true;
        } catch (error) {
          console.error(error);
        }
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
                  if (element.name == resourceName) {
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

          .then((data) => {
            setStore({ searchResults: data.data });
            console.log("search results", getStore().searchResults);
          })
          .catch((error) => console.log(error));
      },
      setOfferings: () => {
        fetch(getStore().current_back_url + "/api/getOfferings")
          .then((response) => response.json())
          .then((data) => {
            setStore({ offerings: data.data });
            console.log("from setOfferings", getStore().offerings);
            console.log("from setOfferings", data.data);
          })
          .catch((error) => console.log(error));
      },
      filterSearchResults: (when, categorySearch) => {
        const searchResults = getStore().searchResults;
        const filteredResults = getStore().filteredResults;
        searchResults.forEach((item, index) => {
          // if only a category is selected...
          if (
            !when.length &&
            (item.category == categorySearch[1] ||
              item.category.includes(categorySearch[2]) ||
              item.category.includes(categorySearch[3]) ||
              item.category.includes(categorySearch[4]))
          ) {
            filteredResults.push(item);
            let newResults = [...new Set(filteredResults)];
            setStore({ filteredResults: newResults });
          }

          // if only a day of the week is selected...
          // else if (
          //   !categorySearch[1] &&
          //   item.schedule.some((scheduleItem) => {
          //     return when.includes(scheduleItem.day.toLowerCase());
          //   })
          // )
          {
            // setStore({ filteredResults: [] });
            filteredResults.push(item);
            let newResults = [...new Set(filteredResults)];
            setStore({ filteredResults: newResults });
          }
        });

        //  if a category and a day of the week are selected...
        // if (when.length && categorySearch[1]) {
        //   let filteredResults = getStore().filteredResults;
        //   filteredResults = [];
        //   setStore({ filteredResults: filteredResults });
        //   searchResults.forEach((item, index) => {
        //     let day = item.schedule[0].day.toLowerCase();
        //     let category = item.category;
        //     if (
        //       (day == when[0] ||
        //         day == when[1] ||
        //         day == when[2] ||
        //         day == when[3] ||
        //         day == when[4] ||
        //         day == when[5] ||
        //         day == when[6]) &&
        //       (category == categorySearch[1] ||
        //         category == categorySearch[2] ||
        //         category == categorySearch[3] ||
        //         category == categorySearch[4])
        //     ) {
        //       let newArray = filteredResults;
        //       newArray.push(item);
        //       setStore({ filteredResults: newArray });
        //     }
        //   });
        // }
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
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      getComments: (resource_id) => {
        const current_back_url = getStore().current_back_url;
        let id = parseInt(resource_id);
        const opts = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(current_back_url + "/api/getcomments/" + id, opts)
          .then((res) => res.json())
          .then((data) => {
            console.log("this is from get_comments", data);
            // return data;
            setStore({ commentsList: data.comments });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      createOffering: async (
        title,
        offeringType,
        offeringDescription,
        image,
        image2
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
            title: title,
            offering_type: offeringType,
            description: offeringDescription,
            image: image,
            image2: image2,
            // user_id: user_id,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createOffering",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          return true;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
};

export default getState;

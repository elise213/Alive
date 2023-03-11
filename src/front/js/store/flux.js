const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      // each time you open a new environment,check to make sure this is the same URL
      // front URL is port 3000
      current_front_url:
        "https://3000-lalafontaine-alive-bwtkmh0rghv.ws-us90.gitpod.io",
      // back URL is port 3001
      current_back_url:
        "https://3001-lalafontaine-alive-bwtkmh0rghv.ws-us90.gitpod.io",

      latitude: null, //to store user location
      longitude: null, //to store user location
    },
    actions: {
      // Use getActions to call a function within a fuction
      login: async (email, password) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
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
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      createUser: async (name, email, password) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
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
            window.location.href = current_front_url + "/login";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        const current_front_url = getStore().current_front_url;
        const token = sessionStorage.removeItem("token");
        setStore({ token: null });
        console.log(token);
        window.location.href = current_front_url + "/";
      },
      createOrganization: async (name, email, password) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createOrganization",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
            window.location.href = current_front_url + "/loginOrganization";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      loginOrganization: async (email, password) => {
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
          const response = await fetch(
            current_back_url + "/api/loginOrganization",
            opts
          );
          if (response.status !== 200) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      createResource: async (
        name,
        schedule,
        website,
        phone,
        address,
        resourceType,
        description
      ) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            schedule: schedule,
            website: website,
            phone: phone,
            address: address,
            resourceType: resourceType,
            description: description,
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
    },
  };
};

export default getState;

// A betterrrrrrrrrrr commment ;)

// Testing for github - Mara
//Testing for github - Mara

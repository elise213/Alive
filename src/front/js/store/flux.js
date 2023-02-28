const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      login: async (email, password) => {
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
            "https://3001-lalafontaine-alive-30sx54cqryn.ws-eu88.gitpod.io/api/login",
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
      createUser: async (name, email, password) => {
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
            "https://3001-lalafontaine-alive-30sx54cqryn.ws-eu88.gitpod.io/api/createUser",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
            window.location.href =
              "https://3000-lalafontaine-alive-30sx54cqryn.ws-eu88.gitpod.io/login";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        const token = sessionStorage.removeItem("token");
        setStore({ token: null });
        console.log(token);
        window.location.href =
          "https://3000-lalafontaine-alive-30sx54cqryn.ws-eu88.gitpod.io/";
      },
      createOrganization: async (name, email, password) => {
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
            "https://3001-lalafontaine-alive-30sx54cqryn.ws-eu88.gitpod.io/api/createOrganization",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
            window.location.href =
              "https://3000-lalafontaine-alive-30sx54cqryn.ws-eu88.gitpod.io/loginOrganization";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      loginOrganization: async (email, password) => {
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
            "https://3001-lalafontaine-alive-30sx54cqryn.ws-eu88.gitpod.io/api/loginOrganization",
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
    },
  };
};

export default getState;

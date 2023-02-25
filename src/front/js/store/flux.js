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
          const respose = await fetch(
            "https://3001-lalafontaine-alive-1aqqlme72zf.ws-eu88.gitpod.io/api/login",
            opts
          );
          if (Response.status !== 200) {
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
          const respose = await fetch(
            "https://3001-lalafontaine-alive-1aqqlme72zf.ws-eu88.gitpod.io/api/createUser",
            opts
          );
          if (Response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
            window.location.href =
              "https://3000-lalafontaine-alive-1aqqlme72zf.ws-eu88.gitpod.io/login";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        const token = sessionStorage.removeItem("token");
        setStore({ token: null });
        window.location.href =
          "https://3000-lalafontaine-alive-1aqqlme72zf.ws-eu88.gitpod.io/";
      },
    },
  };
};

export default getState;

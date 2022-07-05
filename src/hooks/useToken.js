const { useState, useEffect } = require("react");

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;

    // backend e shudu email ti pathabo jeta amar server side e ami req.body diye niyechi:
    const currentUser = { email: email };

    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => {
          // backend theke token ti je ami res.send e pathiechi ta eikhane asbe:
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          console.log("Success:", data);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;

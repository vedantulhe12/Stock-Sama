import React, { createContext, useContext, useEffect, useState } from "react";
import apiService from "../services/apiService";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState();

  const getProjects = async () => {
    const res = await apiService.get("/detections/");
    if (res.success === true) {
      setProjects(res.data);
      setNewProject(res.data.at(-1));
    }
  }

  useEffect(() => {
    getProjects();
  }, [])


  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        projects,
        newProject,
        setNewProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
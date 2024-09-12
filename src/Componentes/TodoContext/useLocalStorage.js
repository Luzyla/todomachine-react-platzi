import React from "react";

/* localStorage.removeItem("TODOS_v1");

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Calmarme", completed: true },
  { text: "Curso React.js", completed: false },
  { text: "Dormir", completed: false },
  { text: "Meditar", completed: false },
  { text: "Meditar 2", completed: true },
];
localStorage.setItem("TODOS_v1", JSON.stringify(defaultTodos)); */

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true); //tambien puedo poner setError(error) para mostrar cuál es el error
      }
    }, 3000);
  }, []);

  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

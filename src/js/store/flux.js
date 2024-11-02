const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
            // Añadir favorito
            addFav: (fav) => {
                const store = getStore();
                if (!store.favorites.some(f => f.uid === fav.uid)) {
                    setStore({ favorites: [...store.favorites, fav] });
                }
            },
            // Eliminar favorito por UID
            removeFavByUid: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid);
                setStore({ favorites: updatedFavorites });
            },
            // Cambiar color
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            },
            // Función genérica para fetch
            fetchData: (url, setter) => {
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("Datos obtenidos:", data.results);
                        setStore({ [setter]: data.results });
                    })
                    .catch(error => {
                        console.error("Hubo un error:", error);
                    });
            },
            // Obtener personajes
            getPeople: () => {
                getActions().fetchData("https://www.swapi.tech/api/people", 'characters');
            },
            // Obtener vehículos
            getVehicles: () => {
                getActions().fetchData("https://www.swapi.tech/api/vehicles", 'vehicles');
            },
            // Obtener planetas
            getPlanets: () => {
                getActions().fetchData("https://www.swapi.tech/api/planets", 'planets');
            },
            // Ejemplo de función
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            // Cargar algunos datos (puedes implementar tu propia lógica aquí)
            loadSomeData: () => {
                // fetch().then().then(data => setStore({ "foo": data.bar }))
            },
        }
    };
};

export default getState;

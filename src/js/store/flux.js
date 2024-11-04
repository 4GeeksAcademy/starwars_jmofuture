const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {

            addFav: (fav) => {
                const store = getStore();
                if (!store.favorites.some(f => f.uid === fav.uid)) {
                    setStore({ favorites: [...store.favorites, fav] });
                }
            },

            removeFavByUid: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid);
                setStore({ favorites: updatedFavorites });
            },


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

            getPeople: () => {
                getActions().fetchData("https://www.swapi.tech/api/people", 'characters');
            },

            getVehicles: () => {
                getActions().fetchData("https://www.swapi.tech/api/vehicles", 'vehicles');
            },
 
            getPlanets: () => {
                getActions().fetchData("https://www.swapi.tech/api/planets", 'planets');
            },
           
        }
    };
};

export default getState;

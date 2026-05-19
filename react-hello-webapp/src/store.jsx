import React, { useState, useEffect } from "react";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState({
            store: {
                contactos: []
            },
            actions: {
                obtenerContactos: async () => {
                    try {
                        const response = await fetch("https://playground.4geeks.com/contact/agendas/david_agenda/contacts");
                        if (response.status === 404) {
                            await state.actions.crearAgenda();
                        } else if (response.ok) {
                            const data = await response.json();
                            setState(prevState => ({
                                ...prevState,
                                store: { ...prevState.store, contactos: data.contacts }
                            }));
                        }
                    } catch (error) {
                        console.error("Error cargando contactos:", error);
                    }
                },

                crearAgenda: async () => {
                    try {
                        const response = await fetch("https://playground.4geeks.com/contact/agendas/david_agenda", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" }
                        });
                        if (response.ok) {
                            console.log("Agenda 'david_agenda' creada con éxito");
                            return true;
                        }
                    } catch (error) {
                        console.error("Error al crear la agenda:", error);
                    }
                    return false;
                },

                crearContacto: async (nuevoContacto) => {
                    try {
                        const response = await fetch("https://playground.4geeks.com/contact/agendas/david_agenda/contacts", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(nuevoContacto)
                        });

                        if (response.ok) {
                            console.log("Contacto guardado!");
                            await state.actions.obtenerContactos();
                            return true;
                        } else {
                            await state.actions.crearAgenda();
                            console.error("Fallo al guardar, reintentando crear agenda...");
                        }
                    } catch (error) {
                        console.error("Error en la petición POST:", error);
                    }
                    return false;
                },

                borrarContacto: async (id) => {
                    try {
                        const response = await fetch(`https://playground.4geeks.com/contact/agendas/david_agenda/contacts/${id}`, {
                            method: "DELETE"
                        });
                        if (response.ok) {
                            await state.actions.obtenerContactos();
                        }
                    } catch (error) {
                        console.error("Error al borrar:", error);
                    }
                },
                editarContacto: async (id, contactoActualizado) => {
                    try {
                        const response = await fetch(`https://playground.4geeks.com/contact/agendas/david_agenda/contacts/${id}`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(contactoActualizado)
                        });

                        if (response.ok) {
                            console.log("Contacto editado con éxito!");
                            await state.actions.obtenerContactos();
                            return true;
                        }
                    } catch (error) {
                        console.error("Error en la petición PUT:", error);
                    }
                    return false;
                }
            }
        });

        useEffect(() => {
            state.actions.obtenerContactos();
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
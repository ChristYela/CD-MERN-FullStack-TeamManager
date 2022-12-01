import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";
import axios from "axios"

const url = "http://localhost:8000/api/players";

const WelcomePage = () => {
    const [lista, setLista] = useState([])

    const get_all = () => {
        axios.get(url)
            .then(result => result.data)
            .then(response => {
                console.log("PLAYERS", response);
                setLista(response);
            })
    }

    useEffect(() => {
        get_all();
    }, [])

    const borrar = (id) => {
        console.log("BORRANDO: ", id);
        if (window.confirm("Are You sure to delete this post?")) {
        axios.delete(url + "/" + id)
            .then(result => result.data)
            .then(response => {
                console.log(response);
                get_all();
            })
        }
    }

    return (
        <div className="container">
            <div className={`${styles.spacedRow}`}>
                <Link to="/players/list" ><h1>Manage Players</h1></Link>
                <h1>|</h1>
                <Link to="/status/game/1"><h1>Manage Player Status</h1></Link>
            </div>
            <div className={`container ${styles.borderContainer}`}>
                <div className={`${styles.spacedRow}`}>
                    <Link to="/players/list" ><h2>List</h2></Link>
                    <h2>|</h2>
                    <Link to="/players/addplayer"><h2>Add Player</h2></Link>
                </div>
                <div className="container">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((item, index) => {
                                return (
                                    <tr key={item.nombre + index}>
                                        <td>{item.nombre}</td>
                                        <td>{item.posicion}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={(e) => borrar(item._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );

}

export default WelcomePage;
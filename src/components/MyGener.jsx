import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faTh } from "@fortawesome/free-solid-svg-icons";


const MyGener = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                <div className="dropdown ml-4 mt-1">
                    <button
                        className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ backgroundColor: "#221f1f" }}
                    >
                        Genres &nbsp;
                    </button>
                    <div
                        className="dropdown-menu bg-dark"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <a
                            className="dropdown-item text-white bg-dark"
                            href="#"
                        >
                            Comedy
                        </a>
                        <a
                            className="dropdown-item text-white bg-dark"
                            href="#"
                        >
                            Drama
                        </a>
                        <a
                            className="dropdown-item text-white bg-dark"
                            href="#"
                        >
                            Thriller
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faThLarge} className="icons" />
                <FontAwesomeIcon icon={faTh} className="icons" />
            </div>
        </div>
    );
};

export default MyGener;
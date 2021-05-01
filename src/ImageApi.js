import React, { useEffect, useState } from "react";
import "./ImageApi.css";



function ImageApi() {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(
			"http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
		);
		setUsers(await response.json());
		// console.log(data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			
			<div className="container-fluid main-div mt-5">
                <div className="title">
                    <h1 className="text-center">React Image Gallery</h1>
                </div>

				<div className="row text-center">   
					{
                    users.map((currElem) => {
						return (
							<div className="col-12 col-md-4 mt-5">
								<div className="image-container mt-5">
									    <img
                                        src={currElem.urls.regular}
										alt="image here"
										className="api_images"
										width="330px"
									/>
								</div>
							</div>
						);
					    })
                    }
				</div>
			</div>
		</>
	);
}

export default ImageApi;

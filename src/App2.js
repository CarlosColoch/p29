import React from "react";
import axios from "axios";

export default function App2() {
	const getUsers = async () => 
	 try {
		const url = "https://jsonplaceholder.typicode.com/users";
		const response = await axios.get(url);
		console.log(response.data);
		} catch (error)	 {
		  console.error(error);
		}
	};

	const createPost = async() => {
	  try {
		const url = "https://jsonplaceholder.typicode.com/users";
		const body = {
			id: 1,
			title: "TinCode.es",
			body: "Cursos de programación",
			userId: 1,
		  }
		} catch (error) {
		  console.error(error);
		}
	       };
		
		const response = await axios.post(url, body);
		console.log(response);
		} catch (error) {
		  console.error(error);
	 }
	};
	
	return (
		<div>
		  <h1>HTTP - Axios</h1>
		   <button onClick={getUsers}>Obtener usurios</button>
		   <button onClick={createPost}>Crea post</button>
		</div>
);
}

import React from 'react';
import { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';


class Table extends Component {
    state = { 
        movies: getMovies(),
        
     } 


     handleDelete = (movie) => {
        const movies = this.state.movies.filter((movie2) => movie.title !== movie2.title);
        this.setState({
            movies: movies
        });

     };

    render() { 
        return (

            <div>
                <h2>{this.state.movies.length>0 ? `Showing ${this.state.movies.length} movies in the database.` : "No movies."}</h2>
               <table className='table'>

                <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            
                        </tr>
                
                    {this.state.movies.map((movie) => 
                            
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>                     
                    </tr>  
                              )}

                </tbody>
        
               </table>
                    
            </div>
        );
    }
}
 
export default Table;
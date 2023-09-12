import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class AddBooking extends React.Component{
    constructor(){
        super();
        this.state ={
            name:'',
            description:'',
            type:''
        }
        this.SetMovieName =this.SetMovieName.bind(this);
        this.SetMovieDescription = this.SetMovieDescription.bind(this);
        this.SetMovieType= this.SetMovieType.bind(this);
        this.saveMovie = this .saveMovie.bind(this);
    }
    SetMovieName(e){
        this.setState({name:e.target.value});
    }
    SetMovieDescription(e){
        this.setState({description:e.target.value});
    }
    SetMovieType(e){
        this.setState({type:e.target.value});
    }
    saveMovie(){
        // alert('Movie added:' + this.state.name +','+ this.state.description+','+this.state.type);
        const movieData = {
            "name": this.state.name,
            "description": this.state.description,
            "type": this.state.type
        }
        // Make a POST request to your backend API
        fetch('http://localhost:5064/api/Movie/AddMovie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(movieData), 
        })
        .then(response => {
            if (response.ok) {
                alert('Movie added successfully'); 
            } else {
                alert('Failed to add movie');
            }
        })
        .catch(error => {
            console.error('Error:', error); 
        });
    }
    render(){
        
        return(<div>
            <h2> Movie Entry</h2><hr/>
            <form>
                <div className="form-group">
                    <label>Movie Name</label>
                    <input type="text" value ={this.state.name}  className ="form-control" onChange={this.SetMovieName}/>

                </div>
                <div className="form-group">
                    <label>Movie Description</label>
                    <input type="text" value ={this.state.description} className ="form-control" onChange={this.SetMovieDescription} />
                    
                </div>
                <div className="form-group">
                    <label>Movie type</label>
                    <input type="text" value ={this.state.type} className ="form-control" onChange={this.SetMovieType}/>
                    
                </div>
                <input type ="button" onClick={this.saveMovie} value ="Save" className="btn btn-primary" />
                <input type ="button" value ="Reset" className="btn btn-secondary" />

            </form>
        </div>)
    };

}
export default AddBooking;
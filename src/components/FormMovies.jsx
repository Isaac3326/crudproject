import { useEffect } from "react";
import { useForm } from "react-hook-form";


const FormMovies = ({ creatMovies, updateInfo, updateMovies, setUpdateInfo }) => {

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
        if(updateInfo) {
            // Update
            updateMovies('/movies', updateInfo.id, data)
            setUpdateInfo()
        } else {
            // Create
            creatMovies('/movies', data)
        }
        reset({
            name: '',
            genre: '',
            duration: '',
            release_date: ''
        })

    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input {...register('name')} type="text" id="name" />
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <input {...register('genre')} type="text" id="genre" />
            </div>
            <div>
                <label htmlFor="duration">Duration</label>
                <input {...register('duration')} type="text" id="duration" />
            </div>
            <div>
                <label htmlFor="release_date">Release date</label>
                <input {...register('release_date')} type="date" id="release_date" />
            </div>
            <button>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    );

};

export default FormMovies
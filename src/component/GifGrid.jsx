
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, deleteCategory }) => {

  const { images, isLoading } = useFetchGifs(category)


  return (
    <>
      <div className="encabezadoClose">
        <h3> {category} </h3>
        <i className="rojo fa-solid fa-xmark" onClick={() => deleteCategory(category)} ></i>
      </div>
      {
        isLoading ? <h2>Cargando...</h2> : null
      }
      <div className="card-grid">
        {
          images.map((images) => (
            <GifItem
              key={images.id}
              {...images} />
          ))

        }
      </div>


    </>
  )
}

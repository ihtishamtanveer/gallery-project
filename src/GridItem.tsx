import { useDrag } from 'react-dnd';

const ItemTypes = {
  GRID_ITEM: 'gridItem'
};

const GridItem = ({ id, src, index }:{id: number, src: string, index: number}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.GRID_ITEM,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
          <img className="rounded-lg" src={src} alt="image description" />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>Do you want to get notified when a new component is added to Flowbite?</p>
        </figcaption>
      </figure>
      {/* {text} */}
    </div>
  );
};

export default GridItem;

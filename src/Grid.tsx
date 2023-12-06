import { useDrop } from 'react-dnd';
import GridItem from './GridItem';

const ItemTypes = {
  GRID_ITEM: 'gridItem'
};

const Grid = ({ items, onDrop }: {items: [], onDrop: () => void}) => {
  const [, drop] = useDrop({
    accept: ItemTypes.GRID_ITEM,
    drop: (item, monitor) => onDrop(item, monitor)
  });

  return (
    <div
      ref={drop}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px'
      }}
    >
      {items.map((item, index) => (
        <GridItem key={item.id} id={item.id} src={item.src} index={index} />
      ))}
    </div>
  );
};

export default Grid;

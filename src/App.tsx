import { useState } from 'react';
import './App.css';

import Grid from './Grid';

function App() {
  const [gridItems, setGridItems] = useState([
    {
      id: 1,
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x799",
      width: 800,
      height: 600
    },
    {
      id: 2,
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1600,
      height: 900
    },
    {
      id: 3,
      src: "https://source.unsplash.com/qDkso9nvCg0/800x799",
      width: 800,
      height: 600
    },
    {
      id: 4,
      src: "https://source.unsplash.com/iecJiKe_RNg/800x799",
      width: 1600,
      height: 900
    },
    {
      id: 5,
      src: "https://source.unsplash.com/epcsn8Ed8kY/800x799",
      width: 800,
      height: 600
    },
    {
      id: 6,
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x799",
      width: 1600,
      height: 900
    },
    {
      id: 7,
      src: "https://source.unsplash.com/zh7GEuORbUw/800x799",
      width: 800,
      height: 600
    },
    {
      id: 8,
      src: "https://source.unsplash.com/PpOHJezOalU/800x799",
      width: 1600,
      height: 900
    },
    {
      id: 9,
      src: "https://source.unsplash.com/I1ASdgphUH4/800x799",
      width: 800,
      height: 600
    }
  ]);

  const handleDrop = (item, monitor) => {
    console.log('handle drop', item)
    const droppedIndex = monitor.getItem().index;
    console.log("🚀 ~ file: App.tsx:183 ~ handleDrop ~ droppedIndex:", droppedIndex)
    console.log('\n\n', 'monitor.getDropResult();', monitor.getDropResult())


    const newItems = [...gridItems];
    const [draggedItem] = newItems.splice(item.index, 1);
    newItems.splice(droppedIndex, 0, draggedItem);
    // const draggedItem = newItems.find((i) => i.id === item.id);
    // const a = draggedItem
    // const b = newItems[droppedIndex];
    // console.log('\n\n', {
    //   a,
    //   b
    // })
    // newItems[droppedIndex] = a;
    // newItems[item.index] = b;
    // newItems.splice(item.index, droppedIndex);
    // newItems.splice(item.index, 0, draggedItem);
    console.log('\n\n', 'newItems', newItems)
    setGridItems(newItems);
  };

  return (
    <>
      <div className='gZyJMi'>
        <section className="flex shrink-0 flex-col justify-between pb-1.5 md:flex-row">
          <div className="sc-bcXHqe Efjeb">
            <div className="flex flex-1" style={{ maxWidth: '650px' }}>
              <h1
                className="my-[6px] mr-4 break-words text-24 font-semibold text-pigeon-700"
                data-disableselect="true"
                data-testid="BOARD_BLURB_TITLE"
              >
                Air Branded Boards
              </h1>
            </div>
            <div className="min-w-[240px]" style={{ maxWidth: '650px' }}>
              <p
                data-testid="BOARD_BLURB_DESCRIPTION"
                data-disableselect="true"
                className="mt-1 whitespace-pre-wrap break-words text-14 text-pigeon-500"
              >
                With a bunch of stock photos!
              </p>
            </div>
          </div>
        </section>
        <hr className='mt-5 pb-5' />
        <div className='title-upper'>
          <button type='button'>
            <div className='title'>
              Boards (4)
            </div>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 pb-10">
          {[1, 2, 3, 4, 5, 6, 7].map(() => (
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>Do you want to get notified when a new component is added to Flowbite?</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <hr className='mt-5 pb-5' />
        <div className='title-upper'>
          <button type='button'>
            <div className='title'>
              Assets (12)
            </div>
          </button>
        </div>
        <div>
          <Grid items={gridItems} onDrop={handleDrop} />
        </div>
      </div>
    </>
  )
}

export default App

import { useRouter } from 'next/navigation'


const PAGE_SIZE = 2;

const workoutTypes = [
    {
        name: 'Cardio',
        value: 'cardio',
    },
    {
        name: 'Class',
        value: 'class',
    },
    {
        name: 'HIIT',
        value: 'hiit',
    },
    {
        name: 'Strength',
        value: 'strength',
    },
];





const Search = ({ post }) => {


    const {
        workoutType = 'all'
    } = router.query;




  return (
    <div>

    </div>
  )
}

export default Search

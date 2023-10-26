//import Dashboard from '@components/Dashboard';
import ExerciseCard from '@components/ExerciseCard';
import { fetchExercises } from '@utils'
import SearchExercises from '@components/SearchExercises';
import SearchBar from '@components/SearchBar';

const Home = async () => {
  const allExercises = await fetchExercises();

  const isDataEmpty = !Array.isArray(allExercises) || allExercises.length < 1 || !allExercises;//if any of these are true that means our data is empty



  return (
    <section className="w-full h-screen">

    <div className="mt-12 sm:px-16 px-6 py-4 max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-gray-900">
          <h1 className="text-4xl font-extrabold">Exercise Catalogue</h1>
          <p>Explore a range of exercises</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          {/* <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year"/>
          </div> */}
        </div>

        {!isDataEmpty ? (
          <section>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 py-14">
              {allExercises?.map((exercise) =>
                <ExerciseCard exercise={exercise} />)}
            </div>
          </section>
        ) : (
          <div>
            <h2>Oops, no results</h2>
            <p>{allExercises?.message}</p>
          </div>
        )}
    </div>

    </section>
  )
}

export default Home;

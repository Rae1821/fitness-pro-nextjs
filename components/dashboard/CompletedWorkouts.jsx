"use client"; // make this the main client component and store state here

import AppCard from "@/components/appWorkout/AppCard";
import CardioCard from "../cardio/CardioCard";
import ClassCard from "../class/ClassCard";
import HighIntensityCard from "../hiit/HighIntensityCard";
import WorkoutCard from "../strength/WorkoutCard";
import Stats from "./Stats";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CompletedWorkouts = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [totalPosts, setTotalPosts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [exerciseObjData, setExerciseObjData] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const sortedData = totalPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // fetch posts and save to total posts state
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      // Filter to only show completed workouts on dashboard
      const completedWorkouts = data.filter(
        (workout) => workout.status !== "planned"
      );

      setTotalPosts(completedWorkouts);
      setExerciseObjData(
        completedWorkouts.map((post) => {
          return post.workoutName;
        })
      );
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  //  edit posts
  const handleEdit = (post) => {
    router.push(`/edit-workout?id=${post._id}`);
  };

  // delete posts
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this workout?"
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/workout/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = totalPosts.filter(
          (item) => item._id !== post._id
        );

        setTotalPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='container mx-auto flex max-w-[1000px] flex-col items-center justify-center'>
      <div className='mx-auto mb-10 mt-20'>
        <Stats data={totalPosts} />
      </div>
      <div className='mx-auto mt-10'>
        <h2 className='mb-6 text-center text-3xl'>Recent Workouts</h2>

        <div className='mx-auto mb-16 flex items-center justify-center'>
          <div className='flex gap-2'>
            <Button
              value='all'
              onClick={(e) => setSelectedTag(e.target.value)}
              size='sm'
              className='text-xs lg:text-sm'
            >
              All
            </Button>
            <Button
              value='cardio'
              onClick={(e) => setSelectedTag(e.target.value)}
              size='sm'
              className='bg-red-400 text-xs text-slate-900 hover:bg-red-500 lg:text-sm'
            >
              Cardio
            </Button>
            <Button
              value='strength'
              onClick={(e) => setSelectedTag(e.target.value)}
              className='bg-cyan-600 text-xs text-slate-900 hover:bg-cyan-700 lg:text-sm'
              size='sm'
            >
              Strength
            </Button>
          </div>
        </div>

        <div className='w-full'>
          {sortedData.map((post) =>
            selectedTag === "app" && post.tag === "app" ? (
              <AppCard
                key={post._id}
                post={post}
                selectedDate={post.selectedDate}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ) : selectedTag === "cardio" && post.tag === "cardio" ? (
              <CardioCard
                key={post._id}
                post={post}
                selectedDate={post.selectedDate}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ) : selectedTag === "class" && post.tag === "class" ? (
              <ClassCard
                key={post._id}
                post={post}
                selectedDate={post.selectedDate}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ) : selectedTag === "hiit" && post.tag === "hiit" ? (
              <HighIntensityCard
                key={post._id}
                post={post}
                selectedDate={post.selectedDate}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ) : selectedTag === "strength" && post.tag === "strength" ? (
              <WorkoutCard
                key={post._id}
                post={post}
                selectedDate={post.selectedDate} //
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ) : selectedTag === "all" ? (
              <div key={post._id}>
                {post.tag === "app" ? (
                  <AppCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                  />
                ) : post.tag === "cardio" ? (
                  <CardioCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                  />
                ) : post.tag === "class" ? (
                  <ClassCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                  />
                ) : post.tag === "hiit" ? (
                  <HighIntensityCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                  />
                ) : post.tag === "strength" ? (
                  <WorkoutCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedWorkouts;

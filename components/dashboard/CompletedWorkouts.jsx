"use client"; // make this the main client component and store state here

import AppCard from "@components/appWorkout/AppCard";
import CardioCard from "../cardio/CardioCard";
import ClassCard from "../class/ClassCard";
import HighIntensityCard from "../hiit/HighIntensityCard";
import WorkoutCard from "../strength/WorkoutCard";
import Stats from "./Stats";

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

      setTotalPosts(data);
      setExerciseObjData(
        data.map((post) => {
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
    <div className="container flex flex-col items-center justify-center">
      <div className="mx-auto mb-10 mt-20">
        <Stats data={totalPosts} />
      </div>
      <div className="mx-auto mt-10 px-4">
        <h2 className="mb-6 text-center text-3xl">Recent Workouts</h2>

        <div className="mx-auto mb-16 flex items-center justify-center">
          <div className="flex gap-2">
            <button
              value="all"
              onClick={(e) => setSelectedTag(e.target.value)}
              className="btn btn-success btn-xs lg:btn-sm"
            >
              All
            </button>
            <button
              value="cardio"
              onClick={(e) => setSelectedTag(e.target.value)}
              className="btn btn-accent btn-xs lg:btn-sm"
            >
              Cardio
            </button>
            <button
              value="strength"
              onClick={(e) => setSelectedTag(e.target.value)}
              className="btn btn-primary btn-xs lg:btn-sm"
            >
              Strength
            </button>
            <button
              value="app"
              onClick={(e) => setSelectedTag(e.target.value)}
              className="btn btn-xs border-0 bg-violet-400 outline-0 lg:btn-sm hover:bg-violet-500"
            >
              App
            </button>
          </div>
        </div>

        <div className="w-full">
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
              <div>
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
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedWorkouts;

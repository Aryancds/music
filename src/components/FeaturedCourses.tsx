import courseData from "../data/music_courses.json";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2  text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  justify-center"></div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="inline-block px-4 py-2 rounded-lg border font-bold border-neutral-600 text-white shadow-md hover:shadow-lg hover:bg-blue-400 hover:text-white transition duration-200 ease-in-out"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;

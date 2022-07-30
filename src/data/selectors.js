import Data from "./index.json";


export const getTrendingCourses = () => {
    const trendingList = Data.trendingCourses;
    const allCourses = Data.allCourses;

    return allCourses.filter(course => (trendingList.includes(course.id)));
};

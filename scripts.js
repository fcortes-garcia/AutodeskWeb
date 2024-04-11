document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for courses (replace with actual data)
    const courses = [
        { title: "Introduction to AutoCAD", videoUrl: "https://example.com/video1.mp4" },
        { title: "Intermediate AutoCAD Techniques", videoUrl: "https://example.com/video2.mp4" },
        { title: "Advanced AutoCAD Modeling", videoUrl: "https://example.com/video3.mp4" }
    ];

    // Function to display courses
    function displayCourses() {
        const courseList = document.getElementById("course-list");
        courses.forEach(course => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = course.title;
            link.href = `video.html?videoUrl=${encodeURIComponent(course.videoUrl)}`;
            listItem.appendChild(link);
            courseList.appendChild(listItem);
        });
    }

    displayCourses();
});

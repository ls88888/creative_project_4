<template>
    <div>
        <br>
        <h2> About Lilies Designs </h2>
        <br>
        <section class="about-grid">
            <div>
                <img src="../img/profile.jpg"/>
            </div>
            <div>
                <p> Welcome to Lilies Designs where we sell custom artwork at reasonable cost. Years of design experience that is one
                    of a kind!
                </p>
                <p>
                    Major in Technology and Engineering Studies with Minors in Chinese and Business.
                </p>
                <p>
                    Experienced Research Assistant and designer with a demonstrated history of working in the higher education industry. Skilled in Web Development, Unity, C++, and Adobe Illustrator.
                </p>
                <p>
                    She speaks four languages: English, Chinese, Japanese, and French.
                </p>
                <p>
                    She is probably the greatest most accomplished person in the whole wide world.
                </p>

                <p> Courses that Lily has taken: Accounting and Finance AutoCAD Civil 3D and Revit Communication Technology and Systems Computer Science (C++ Fundamentals) Cornerstone: Information Technology & Cybersecurity Exploration of Teaching Industrial Design Fundamentals: Structured Creativity, Visual Literacy, Visualization Methods, and Form & Surface Development Information Systems 201 Information Systems 303 - Coding in C# International Business and Marketing Virtual and Augmented Reality Course Web Programing (Front-end and Back-end)</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
    .about-grid{
        display: grid;
        grid-template: auto auto / 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        padding-left: 30px;
        padding-right: 30px;
    }
    @media only screen and (min-width: 1000px) {
        .about-grid {
            grid-template: auto / 1fr 2fr;
        }
    }

</style>
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-grow p-6 md:p-10 lg:p-12">
        {/* Main grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5 lg:gap-6 max-w-screen-xl mx-auto">
          {/* Student Card */}
          <div className="md:col-span-3">
            <Card
              sx={{
                backgroundColor: "rgb(36, 33, 38)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent className="py-6 md:py-8">
                <Typography
                  gutterBottom
                  variant="h4"
                  color="white"
                  component="div"
                >
                  Student
                </Typography>
                <Typography variant="body2" color="white">
                  MSc in Computer Science
                  <br />
                  University of Amsterdam & Vrije Universiteit Amsterdam
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Profile Card */}
          <div className="md:col-span-2 md:row-span-2">
            <Card
              sx={{
                backgroundColor: "rgb(36, 33, 38)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{
                  height: { xs: "280px", md: "320px", lg: "350px" },
                  objectFit: "cover",
                }}
                image="/profile.jpg"
                title="Yash"
              />
              <CardContent>
                <Typography variant="h4" color="white" component="div">
                  Yash Chuni Israni
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Technologies Card */}
          <div className="md:col-span-3">
            <Card
              sx={{
                backgroundColor: "rgb(36, 33, 38)",
                height: "100%",
              }}
            >
              <CardContent className="py-6 md:py-8">
                <Typography
                  gutterBottom
                  variant="h4"
                  color="white"
                  component="div"
                >
                  Technologies
                </Typography>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center pt-2">
                  {[
                    { src: "/icons8-java-logo-100.png", title: "Java" },
                    { src: "/icons8-react-100.png", title: "React" },
                    { src: "/icons8-javascript-100.png", title: "JavaScript" },
                    {
                      src: "/icons8-tailwindcss-100.png",
                      title: "Tailwind CSS",
                    },
                    { src: "/icons8-flutter-100.png", title: "Flutter" },
                    { src: "/python-logo-only.svg", title: "Python" },
                    { src: "/icons8-mongodb-100.png", title: "MongoDB" },
                  ].map((tech, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      image={tech.src}
                      title={tech.title}
                      sx={{
                        width: { xs: 50, md: 55, lg: 60 },
                        height: { xs: 50, md: 55, lg: 60 },
                        objectFit: "contain",
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Me Card */}
          <div className="md:col-span-5 mt-0 md:mt-2">
            <Card
              sx={{
                backgroundColor: "rgb(36, 33, 38)",
                height: "100%",
              }}
            >
              <CardContent className="py-6 md:py-8">
                <Typography gutterBottom sx={{ color: "white" }} variant="h4">
                  About Me
                </Typography>
                <Typography variant="body1" color="white">
                  Driven and ambitious, I possess a knack for quickly grasping
                  new concepts. The dynamic world of software development deeply
                  excites me, and I am always eager to push my boundaries and
                  tackle challenging projects. I&#39;m determined to specialize
                  and contribute meaningfully to this field.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="p-6 flex justify-center items-center">
        <a
          className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/yash-israni/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons8-linkedin-50.png"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

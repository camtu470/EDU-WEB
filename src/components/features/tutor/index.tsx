import { AnimatedTestimonials } from "../../ui/animated-testimonials";

export default function Tutor() {
  const testimonials = [
    {
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      quote:
        "The attention to detail and innovative features have completely transformed our workflow.",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80",
      rating: 5,
      country: "Singapore",
      specialties: ["Product Design", "Agile Workflow", "UX Strategy"],
    },
    {
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      quote:
        "Implementation was seamless and the results exceeded our expectations.",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80",
      rating: 4,
      country: "USA",
      specialties: ["DevOps", "Microservices", "System Architecture"],
    },
    {
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      quote:
        "This solution has significantly improved our team's productivity.",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80",
      rating: 5,
      country: "UK",
      specialties: ["Process Optimization", "Team Building", "Cloud Ops"],
    },
  ];

  return (
    <div className="flex flex-col">
      <h2 className="lg:text-center  text-xl md:text-3xl font-bold">
        Đội ngũ giáo viên nổi bật
      </h2>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </div>
  );
}

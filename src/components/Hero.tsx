import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary animate-glow" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Powered by Advanced AI</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Build faster with{" "}
          <span className="gradient-text">intelligent</span>
          <br />
          productivity tools
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Transform your workflow with AI-powered automation. Save hours every day with smart features that adapt to your needs.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 group transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary/50 backdrop-blur-sm px-8">
            Watch Demo
          </Button>
        </div>
        
        {/* Social proof */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background" />
              ))}
            </div>
            <span>10k+ users</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div>★★★★★ 4.9/5 rating</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

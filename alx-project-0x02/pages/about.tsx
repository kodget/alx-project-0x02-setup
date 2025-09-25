import Button from "@/components/common/Button";

const About = () => {
  return (
    <div>
      <div>This is the About page</div>
      <div className="flex flex-row justify-center items-center gap-4">
        <Button size="px-2 py-1 text-sm" shape="rounded-sm" title="small" />
        <Button size="px-4 py-2 text-base" shape="rounded-md" title="medium" />
        <Button size="px-6 py-3 text-lg" shape="rounded-full" title="large" />
      </div>
    </div>
  );
};

export default About;

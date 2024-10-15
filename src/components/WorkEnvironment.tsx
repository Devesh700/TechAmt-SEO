const WorkEnvironment = () => (
  <section className="work-environment bg-white py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Our Work Environment</h2>
      <p className="mb-8 max-w-2xl mx-auto">
        At TechAmt, we foster an open and collaborative work environment where your ideas matter.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="work-image bg-gray-100 p-8 rounded-lg max-w-sm">
          <img src="/images/team-collaboration.svg" alt="Collaboration" className="w-24 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Team Collaboration</h3>
          <p className="text-sm mt-2">
            We believe in teamwork, and we encourage open communication across all departments.
          </p>
        </div>
        <div className="work-image bg-gray-100 p-8 rounded-lg max-w-sm">
          <img src="/images/flexible-hours.svg" alt="Flexible Hours" className="w-24 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Flexible Working Hours</h3>
          <p className="text-sm mt-2">
            We offer flexible work schedules so that you can perform at your best without compromising personal time.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WorkEnvironment;

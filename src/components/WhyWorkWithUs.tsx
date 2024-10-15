const WhyWorkWithUs = () => (
  <section className="why-work bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Why Work with Us?</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex-1 max-w-sm">
          <img src="/images/career-growth.svg" alt="Career Growth" className="mb-4 w-24 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
          <p>
            At TechAmt, we focus on providing our employees with opportunities to advance their careers with regular mentorship and upskilling.
          </p>
        </div>
        <div className="flex-1 max-w-sm">
          <img src="/images/work-life-balance.svg" alt="Work-Life Balance" className="mb-4 w-24 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
          <p>
            We prioritize our employees' work-life balance, allowing them to thrive both professionally and personally.
          </p>
        </div>
        <div className="flex-1 max-w-sm">
          <img src="/images/innovation.svg" alt="Innovative Projects" className="mb-4 w-24 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
          <p>
            Join us to work on cutting-edge technologies and exciting projects that make a difference in the IT industry.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyWorkWithUs;

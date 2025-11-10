import { useServicesQuery } from "@/hooks/useServicesQuery";

const Services = () => {
  const {
    data: services,
    isLoading: servicesLoading,
    isError: servicesError,
  } = useServicesQuery();

  const isLoading = servicesLoading;
  const hasError = servicesError;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong while fetching data.</div>;
  }

  return (
    <section>
      <h2>Services</h2>
      <ul>
        {services?.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;

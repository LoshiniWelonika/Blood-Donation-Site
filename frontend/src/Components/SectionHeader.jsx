const SectionHeader = ({ topic, caption }) => {
  return (
    <div className="section-header">
      <p className="section-subtitle">{topic}</p>
      <h2 className="section-title">{caption}</h2>
    </div>
  );
};

export default SectionHeader;

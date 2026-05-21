const SeverityBadge = ({ level }) => {
  const colors = { Critical: 'rgba(239,68,68,0.15)', High: 'rgba(249,115,22,0.15)', Medium: 'rgba(234,179,8,0.12)' };
  const text = { Critical: '#f87171', High: '#fb923c', Medium: '#eab308' };
  return (
    <span style={{
      background: colors[level] || colors.Medium,
      color: text[level] || text.Medium,
      fontFamily: 'Space Mono,monospace',
      fontSize: 9,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '2px 8px',
      borderRadius: 999,
    }}>
      {level}
    </span>
  );
};

export default SeverityBadge;

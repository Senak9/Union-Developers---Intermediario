interface PhotoProps {
  users: User[];
  page: number;
  index: number;
  status: string;
}
function LocationBoxDetalis({ users, page, index, status }: PhotoProps) {
  return (
    <div
      className={
        status === "noative" ? "box-detalis noative" : "box-detalis ative"
      }
    >
      <h2>Location</h2>
    </div>
  );
}

export default LocationBoxDetalis;

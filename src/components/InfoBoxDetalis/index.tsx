interface PhotoProps {
  users: User[];
  page: number;
  index: number;
  status: string;
}
function InfoBoxDetalis({ users, page, index, status }: PhotoProps) {
  return (
    <div
      className={
        status === "noative" ? "box-detalis noative" : "box-detalis ative"
      }
    >
      <h2>Info</h2>
    </div>
  );
}

export default InfoBoxDetalis;

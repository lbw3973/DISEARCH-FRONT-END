const getPostingTime = (_postingTime: string) => {
  const postingTime = _postingTime.split("-");
  const [year, month, day, hour, minute, second] = postingTime;

  const postingDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour),
    parseInt(minute),
    parseInt(second),
  );

  const now = new Date();
  const diffMs = now.getTime() - postingDate.getTime();

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays}일 전`;
  } else if (diffHours > 0) {
    return `${diffHours}시간 전`;
  } else {
    return `${diffMinutes}분 전`;
  }
};

export { getPostingTime };

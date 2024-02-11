export function formatPhoneNumber(value) {
  console.log(value);
  console.log(value.replace(/[^\d]/gm, ''));
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/gm, '');
  if (value === '+7') return '';
  if (onlyNums === '8' || onlyNums === '7' || onlyNums === '+') return '+7 ';
  // Запись через конкатенацию чтобы семерка стиралась
  if (onlyNums.length <= 1) return '+7' + ` (${onlyNums.slice(1, 2)}`;
  if (onlyNums.length <= 4) return '+7' + ` (${onlyNums.slice(1, 4)}`;
  if (onlyNums.length <= 7)
    return '+7' + ` (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}`;
  if (onlyNums.length <= 9)
    return (
      '+7' +
      ` (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}-${onlyNums.slice(
        7,
        9
      )}`
    );
  return (
    '+7' +
    ` (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}-${onlyNums.slice(
      7,
      9
    )}-${onlyNums.slice(9, 11)}`
  );
}

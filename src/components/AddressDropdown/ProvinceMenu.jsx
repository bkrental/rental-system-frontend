function ProvinceSelect({ options, active = false, onClick }) {
  return (
    <div
      className={clsx(styles.addressMenu, !active && styles.addressMenuHidden)}
    >
      {options.sort().map((province) => (
        <div
          className={styles.addressOption}
          key={province.Id}
          onClick={() => onClick(province)}
        >
          {province.Name}
          <ArrowForwardIosIcon />
        </div>
      ))}
    </div>
  );
}

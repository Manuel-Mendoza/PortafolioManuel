interface Props {
  lang: string;
  listLang: Record<string, string>;
}

const LanguageSwitcher = ({ lang, listLang }: Props) => {
  return (
    <div className="select-group">
      <select
        name="lang"
        id="lang"
        className="select"
        value={lang}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          window.location.href = `/${e.target.value}`;
        }}
      >
        {Object.entries(listLang).map(([key, value]) => (
          <option key={key} value={key} className="text-base">
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

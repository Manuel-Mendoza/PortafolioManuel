interface Props {
  lang: string;
  listLang: Record<string, { flag: string; name: string }>;
  className?: string;
}

const LanguageSwitcher = ({ lang, listLang, className }: Props) => {
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
        {Object.entries(listLang).map(([key, {flag, name}]) => (
          <option key={key} value={key} className="text-base flex gap-2 items-center">
            <img src={flag} alt={name} className="w-6 h-4 rounded-sm" />
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

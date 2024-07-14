const solute = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
};
{
  const greet = (lang) => (solute[lang] ? solute[lang] : 'Welcome');

  console.log(greet('english'));
  console.log(greet('dutch'));
  console.log(greet('IP_ADDRESS_INVALID'));
}

{
  const greet = (lang) => solute[lang] || solute['english'];

  console.log(greet('english'));
  console.log(greet('dutch'));
  console.log(greet('IP_ADDRESS_INVALID'));
}

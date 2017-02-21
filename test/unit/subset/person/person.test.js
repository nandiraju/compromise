var test = require('tape');
var nlp = require('../../lib/nlp');

//list of famous names taken from https://gate.ac.uk/gate/plugins/ANNIE/resources/gazetteer/
var tests = {
  'john stewart': 'Male',
  'martha stewart': 'Female',
  // 'Gaugin': 'Male',
  // 'Gauguin': 'Male',
  'George Bush': 'Male',
  'Hillary Clinton': 'Female',
  'Hillary Rodham Clinton': 'Female',
  // 'John the Baptist': 'Male',
  'Margaret Thatcher': 'Female',
  'Messiaen': 'Male',
  'Mozart': 'Male',
  'Nixon': 'Male',
  'Pope John Paul II': 'Male',
  'Richard Nixon': 'Male',
  'Ronald Reagan': 'Male',
  'Saddam Hussain': 'Male',
  'Saint - Saens': 'Male',
  // 'Shostakovich': 'Male',
  // 'Strauss': 'Male',
  // 'Thatcher': 'Female',
  // 'The Queen': 'Female',
  // 'the Queen': 'Female',
  'Van Gogh': 'Male',
  'Virgin Mary': 'Female',
  'Vivaldi': 'Male',
  'van Gogh': 'Male',
  'Carl Marx': 'Male',
  'Lenin': 'Male',
  'Stalin': 'Male',
  'George W.Bush': 'Male',
  'Mitt Romney': 'Male',
  'Barack Obama': 'Male',
  'Obama': 'Male',
  'Lady Gaga': 'Female',
  'Kanye West': 'Male',
  'Abu Hamza': 'Male',
  'Abu Hamza Al - Masri': 'Male',
  'Osama bin Laden': 'Male',
  'Osama Bin Laden': 'Male',
  'Mubarek': 'Male',
  'Muhammad Ali': 'Male',
  'Jennifer Aniston': 'Female',
  'Tyra Banks': 'Female',
  'Mario Batali': 'Male',
  'David Beckham': 'Male',
  'Halle Berry': 'Female',
  'Tom Brady': 'Male',
  'Matthew Broderick': 'Male',
  'Nathan Lane': 'Male',
  'Mel Brooks': 'Male',
  'Dan Brown': 'Male',
  'Jerry Bruckheimer': 'Male',
  'Kobe Bryant': 'Male',
  'Gisele Bundchen': 'Female',
  'Jim Carrey': 'Male',
  'Dave Chappelle': 'Male',
  'Sean Combs': 'Male',
  'Katie Couric': 'Female',
  'Simon Cowell': 'Male',
  'Tom Cruise': 'Male',
  'Johnny Depp': 'Male',
  'Cameron Diaz': 'Female',
  'Leonardo DiCaprio': 'Male',
  'Celine Dion': 'Female',
  'Jodie Foster': 'Female',
  'John Grisham': 'Male',
  'Tom Hanks': 'Male',
  'Paris Hilton': 'Female',
  'Eric Idle': 'Male',
  'Mike Nichols': 'Male',
  'Peter Jackson': 'Male',
  'LeBron James': 'Male',
  'Derek Jeter': 'Male',
  'Scarlett Johansson': 'Female',
  'Elton John': 'Male',
  'Angelina Jolie': 'Female',
  'Michael Jordan': 'Male',
  'Nicole Kidman': 'Female',
  'Heidi Klum': 'Female',
  'Emeril Lagasse': 'Male',
  'Jay Leno': 'Male',
  'David Letterman': 'Male',
  'Adriana Lima': 'Female',
  'Rush Limbaugh': 'Male',
  'George Lopez': 'Male',
  'Jennifer Lopez': 'Female',
  'George Lucas': 'Male',
  'Paul McCartney': 'Male',
  'Dr. Phil McGraw': 'Male',
  'Phil Mickelson': 'Male',
  'Kate Moss': 'Female',
  'Neil Diamond': 'Male',
  'Bill O\'Reilly': 'Male',
  'Shaquille O\'Neal': 'Male',
  'Carson Palmer': 'Male',
  'James Patterson': 'Male',
  'Ty Pennington': 'Male',
  'Regis Philbin': 'Male',
  'Brad Pitt': 'Male',
  'Wolfgang Puck': 'Male',
  'Rachael Ray': 'Female',
  'Nicole Richie': 'Female',
  'Alex Rodriguez': 'Male',
  'Ray Romano': 'Male',
  'Ronaldinho': 'Male',
  'Valentino Rossi': 'Male',
  'J.K. Rowling': 'Female',
  'Adam Sandler': 'Male',
  'Diane Sawyer': 'Female',
  'Michael Schumacher': 'Male',
  'Ryan Seacrest': 'Male',
  'Jerry Seinfeld': 'Male',
  'Maria Sharapova': 'Female',
  'Jessica Simpson': 'Female',
  'Will Smith': 'Male',
  'Annika Sorenstam': 'Female',
  'Steven Spielberg': 'Male',
  'Bruce Springsteen': 'Male',
  'Howard Stern': 'Male',
  'Rod Stewart': 'Male',
  'Kiefer Sutherland': 'Male',
  'Donald Trump': 'Male',
  'Rick Warren': 'Male',
  'Denzel Washington': 'Male',
  'Andrew Lloyd Webber': 'Male',
  'Michelle Wie': 'Female',
  'Serena Williams': 'Female',
  'Venus Williams': 'Female',
  'Oprah Winfrey': 'Female',
  'Reese Witherspoon': 'Female',
  'Dick Wolf': 'Male',
  'Tiger Woods': 'Male',
  'Renee Zellweger': 'Female',
  'Whitney Houston': 'Female',
  'Adolf Hitler': 'Male',
  'Shania Twain': 'Female',
  'Hulk Hogan': 'Male',
  'Michelle Obama': 'Female',
  'Ashton Kutcher': 'Male',
  'Cardinal Wolsey': 'Male',
  // 'Fulgencia Batista': 'Male',
  'Slobodan Milosevic': 'Male',
  'Renee Zellweger ': 'Female',
  'Whitney Houston ': 'Female',
};

test('celebrity names:', function (t) {
  Object.keys(tests).forEach((k) => {
    var str = nlp(k).people().out('text');
    var msg = '\'' + k + '\' is a person - - have: \'' + str + '\'';
    t.equal(str, k, msg);
  });
  t.end();
});

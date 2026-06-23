import chefchaouenImg from '../assets/chefchaouen.jpg'
import atlasImg from '../assets/atlas.jpg'
import marrakechImg from '../assets/marrakech.jpg'
import merzougaImg from '../assets/merzouga.jpg'
import fesImg from '../assets/fes.jpg'
import essaouiraImg from '../assets/essaouira.jpg'

export const destinations = [
  {
    id: 'marrakech',
    title: 'Marrakech',
    tag: 'Ville Impériale',
    desc: 'Place Jemaa el-Fna, souks colorés, palais et jardins luxuriants.',
    image: marrakechImg,
    heroImage: marrakechImg,
    duration: '3 Jours / 2 Nuits',
    overview: `Plongez au cœur de Marrakech, la ville rouge, et laissez-vous envoûter par ses souks animés, ses palais somptueux et ses jardins secrets. Ce circuit vous emmène à travers les incontournables de la ville impériale : la mythique place Jemaa el-Fna, le palais Bahia, les tombeaux Saadiens et les jardins Majorelle. Vous découvrirez aussi les ruelles de la médina, l'artisanat local et la gastronomie marocaine dans toute sa splendeur.`,
    included: [
      'Transfert aéroport aller-retour',
      '2 nuits en riad traditionnel avec petit-déjeuner',
      'Guide local francophone certifié',
      'Visite guidée de la médina et des monuments',
      'Dîner spectacle sur la place Jemaa el-Fna',
      'Cours de cuisine marocaine',
    ],
    excluded: [
      'Vols internationaux',
      'Déjeuners',
      'Pourboires',
      'Dépenses personnelles',
      'Entrées aux monuments',
    ],
    itinerary: [
      {
        time: 'Jour 1 - Matin',
        title: 'Arrivée & Installation au Riad',
        desc: 'Accueil à l\'aéroport de Marrakech-Menara et transfert vers votre riad dans la médina. Installation et premier thé à la menthe sur la terrasse panoramique.',
      },
      {
        time: 'Jour 1 - Après-midi',
        title: 'Place Jemaa el-Fna & Souks',
        desc: 'Découverte de la célèbre place Jemaa el-Fna avec ses conteurs, musiciens et acrobates. Plongée dans les souks colorés : épices, cuir, tapis et artisanat.',
      },
      {
        time: 'Jour 1 - Soir',
        title: 'Dîner sur les Terrasses',
        desc: 'Dîner traditionnel sur une terrasse avec vue sur la place animée. Découvrez la cuisine marocaine : tajine, pastilla et pâtisseries au miel.',
      },
      {
        time: 'Jour 2 - Matin',
        title: 'Palais Bahia & Tombeaux Saadiens',
        desc: 'Visite guidée du somptueux Palais Bahia avec ses jardins et ses mosaïques. Continuation vers les tombeaux Saadiens, joyau de l\'architecture almohade.',
      },
      {
        time: 'Jour 2 - Après-midi',
        title: 'Jardins Majorelle & Cours de Cuisine',
        desc: 'Promenade dans les jardins Majorelle, oasis de tranquillité aux couleurs bleu et jaune. Puis cours de cuisine marocaine : apprenez à préparer un tajine authentique.',
      },
      {
        time: 'Jour 3 - Matin',
        title: 'Mellah & Départ',
        desc: 'Visite du quartier juif historique (Mellah) et du marché aux épices. Derniers achats d\'artisanat et transfert vers l\'aéroport.',
      },
    ],
  },
  {
    id: 'sahara',
    title: 'Sahara & Merzouga',
    tag: 'Désert',
    desc: 'Nuit sous les étoiles, balade en dromadaire et dunes dorées.',
    image: merzougaImg,
    heroImage: merzougaImg,
    duration: '3 Jours / 2 Nuits',
    overview: `Vivez l'expérience magique du désert du Sahara avec cette aventure de 3 jours au départ de Marrakech. Traversez le col du Tizi n'Tichka, admirez les kasbahs fortifiées de la route des Mille Kasbahs et plongez dans l'immensité des dunes de l'Erg Chebbi à Merzouga. Une nuit dans un camp de luxe au milieu des dunes, une balade en dromadaire au coucher du soleil et un ciel étoilé incomparable vous attendent.`,
    included: [
      'Transport en 4x4 climatisé',
      'Chauffeur-guide expérimenté francophone',
      '1 nuit en riad à Ouarzazate',
      '1 nuit en camp de luxe dans le désert',
      'Balade en dromadaire au coucher du soleil',
      'Dîner et petit-déjeuner au camp',
      'Musique gnaoua traditionnelle au camp',
    ],
    excluded: [
      'Déjeuners en route',
      'Boissons',
      'Pourboires',
      'Sandboarding (en option)',
      'Quad dans les dunes (en option)',
    ],
    itinerary: [
      {
        time: 'Jour 1 - 7h30',
        title: 'Départ de Marrakech',
        desc: 'Départ matinal de votre hébergement à Marrakech. Route vers le Haut Atlas en passant par le col du Tizi n\'Tichka (2 260m). Arrêts photos dans les villages berbères.',
      },
      {
        time: 'Jour 1 - 11h00',
        title: 'Aït Benhaddou',
        desc: 'Visite de la kasbah d\'Aït Benhaddou, classée au patrimoine mondial de l\'UNESCO. Ce ksar en pisé a servi de décor à Gladiator et Game of Thrones.',
      },
      {
        time: 'Jour 1 - 15h00',
        title: 'Ouarzazate & Vallée des Roses',
        desc: 'Arrivée à Ouarzazate, "la porte du désert". Visite des studios de cinéma Atlas. Installation dans un riad pour la nuit.',
      },
      {
        time: 'Jour 2 - 8h00',
        title: 'Gorges du Todra',
        desc: 'Route vers les impressionnantes gorges du Todra, canyon de 300m de haut. Promenade au fond du canyon entre les falaises vertigineuses.',
      },
      {
        time: 'Jour 2 - 16h00',
        title: 'Dunes de Merzouga & Dromadaires',
        desc: 'Arrivée aux portes du désert. Montée sur vos dromadaires pour une caravane vers le camp de luxe au cœur des dunes de l\'Erg Chebbi. Coucher de soleil spectaculaire.',
      },
      {
        time: 'Jour 2 - Soir',
        title: 'Nuit au Camp de Luxe',
        desc: 'Dîner berbère sous les étoiles, musique gnaoua autour du feu et nuit dans votre tente de luxe privée. Ciel étoilé inoubliable.',
      },
      {
        time: 'Jour 3 - 6h00',
        title: 'Lever de Soleil & Retour',
        desc: 'Réveil pour admirer le lever du soleil sur les dunes. Petit-déjeuner au camp puis retour vers Marrakech par une route différente.',
      },
    ],
  },
  {
    id: 'chefchaouen',
    title: 'Chefchaouen',
    tag: 'Montagne',
    desc: 'La perle bleue du Maroc nichée dans les montagnes du Rif.',
    image: chefchaouenImg,
    heroImage: chefchaouenImg,
    duration: '2 Jours / 1 Nuit',
    overview: `Découvrez Chefchaouen, la perle bleue du Maroc, nichée dans les montagnes du Rif. Cette ville enchantée aux murs peints en bleu est l'un des joyaux les plus photographiés du pays. Explorez ses ruelles étroites, ses artisans tisserands, ses cascades environnantes et savourez la tranquillité d'une médina préservée du tourisme de masse.`,
    included: [
      'Transport depuis Fès ou Tanger en véhicule privé',
      '1 nuit en maison d\'hôtes typique',
      'Petit-déjeuner marocain',
      'Guide local de la médina',
      'Randonnée à la cascade d\'Akchour',
    ],
    excluded: [
      'Déjeuners et dîners',
      'Pourboires',
      'Achats personnels',
      'Boissons',
    ],
    itinerary: [
      {
        time: 'Jour 1 - 8h00',
        title: 'Départ vers Chefchaouen',
        desc: 'Départ de Fès (ou Tanger) et route à travers les montagnes du Rif. Paysages verdoyants et villages perchés jalonnent le chemin.',
      },
      {
        time: 'Jour 1 - 12h00',
        title: 'Arrivée & Médina Bleue',
        desc: 'Arrivée à Chefchaouen et découverte à pied de la médina aux teintes bleues. Visite de la place Outa el-Hammam, de la kasbah et de la grande mosquée.',
      },
      {
        time: 'Jour 1 - Après-midi',
        title: 'Artisanat & Ruelles Secrètes',
        desc: 'Exploration des ateliers de tisserands et de fromagers locaux. Photos dans les ruelles les plus emblématiques de la ville bleue.',
      },
      {
        time: 'Jour 1 - Soir',
        title: 'Dîner & Nuit en Maison d\'Hôtes',
        desc: 'Installation dans une charmante maison d\'hôtes avec vue sur la montagne. Dîner libre dans un restaurant avec terrasse panoramique.',
      },
      {
        time: 'Jour 2 - Matin',
        title: 'Cascade d\'Akchour',
        desc: 'Randonnée matinale vers la cascade d\'Akchour à travers la forêt du parc national de Talassemtane. Baignade possible dans les piscines naturelles.',
      },
      {
        time: 'Jour 2 - Après-midi',
        title: 'Retour',
        desc: 'Temps libre pour les derniers achats, puis retour vers votre ville de départ en fin de journée.',
      },
    ],
  },
  {
    id: 'fes',
    title: 'Fès',
    tag: 'Culture',
    desc: 'La plus ancienne médina du monde, artisanat et gastronomie.',
    image: fesImg,
    heroImage: fesImg,
    duration: '2 Jours / 1 Nuit',
    overview: `Fès, la capitale spirituelle et culturelle du Maroc, vous ouvre les portes de sa médina millénaire classée à l'UNESCO. Perdez-vous dans le labyrinthe de 9 000 ruelles, admirez les tanneries médiévales, la mosquée Karaouine (plus ancienne université du monde) et découvrez un artisanat séculaire : zelliges, cuir, cuivre et broderie. Un voyage dans le temps garanti.`,
    included: [
      'Transport privé depuis Casablanca ou Marrakech',
      '1 nuit en riad de charme dans la médina',
      'Petit-déjeuner traditionnel',
      'Guide officiel de la médina de Fès',
      'Visite des tanneries et ateliers d\'artisans',
      'Dégustation de cuisine fassie',
    ],
    excluded: [
      'Déjeuners',
      'Pourboires',
      'Achats personnels',
      'Boissons',
      'Entrées aux monuments',
    ],
    itinerary: [
      {
        time: 'Jour 1 - Matin',
        title: 'Arrivée & Porte Bab Boujloud',
        desc: 'Arrivée à Fès et entrée dans la médina par la majestueuse porte Bab Boujloud aux zelliges bleus et verts. Première immersion dans l\'ambiance unique de Fès el-Bali.',
      },
      {
        time: 'Jour 1 - 11h00',
        title: 'Mosquée Karaouine & Médersa Bou Inania',
        desc: 'Visite de la médersa Bou Inania aux stucs et bois sculptés exceptionnels. Vue extérieure de la mosquée Karaouine, fondée en 859.',
      },
      {
        time: 'Jour 1 - Après-midi',
        title: 'Tanneries Chouara & Artisans',
        desc: 'Montée sur les terrasses surplombant les célèbres tanneries Chouara aux cuves colorées. Visite des ateliers de zelliges, de cuivre et de broderie fassis.',
      },
      {
        time: 'Jour 1 - Soir',
        title: 'Dîner Fassi & Nuit au Riad',
        desc: 'Dégustation d\'un dîner typique de Fès : pastilla au pigeon, rfissa et cornes de gazelle. Nuit dans un riad historique restauré.',
      },
      {
        time: 'Jour 2 - Matin',
        title: 'Quartier Andalou & Poteries',
        desc: 'Exploration du quartier andalou et visite des ateliers de poterie de Fès. Vue panoramique depuis les tombeaux Mérinides.',
      },
      {
        time: 'Jour 2 - Après-midi',
        title: 'Mellah & Départ',
        desc: 'Visite du Mellah (quartier juif) et de la synagogue Ibn Danan. Dernières emplettes au souk puis transfert de départ.',
      },
    ],
  },
  {
    id: 'essaouira',
    title: 'Essaouira',
    tag: 'Côte Atlantique',
    desc: 'Port de pêche pittoresque, plages ventées et musique gnaoua.',
    image: essaouiraImg,
    heroImage: essaouiraImg,
    duration: '1 Jour',
    overview: `Échappez à l'agitation de Marrakech le temps d'une journée à Essaouira, la cité des alizés. Ce port de pêche fortifié par les Portugais séduit par ses remparts face à l'océan, sa médina paisible et son ambiance artistique bohème. Dégustez du poisson grillé au port, flânez dans les galeries d'art et profitez des longues plages balayées par le vent.`,
    included: [
      'Transport aller-retour depuis Marrakech',
      'Visite guidée de la médina et du port',
      'Arrêt à la coopérative d\'huile d\'argan',
      'Temps libre sur la plage',
    ],
    excluded: [
      'Repas',
      'Boissons',
      'Pourboires',
      'Activités nautiques (surf, kite)',
    ],
    itinerary: [
      {
        time: '8h00',
        title: 'Départ de Marrakech',
        desc: 'Prise en charge à votre hébergement et route vers Essaouira (2h30). Arrêt en chemin à une coopérative féminine d\'huile d\'argan.',
      },
      {
        time: '10h30',
        title: 'Arrivée & Remparts',
        desc: 'Arrivée à Essaouira et promenade sur les remparts (skala) face à l\'océan Atlantique. Vue sur les îles Purpuraires et les canons portugais.',
      },
      {
        time: '11h30',
        title: 'Médina & Port de Pêche',
        desc: 'Visite guidée de la médina classée à l\'UNESCO et du port de pêche animé. Observation des artisans menuisiers travaillant le bois de thuya.',
      },
      {
        time: '13h00',
        title: 'Déjeuner Fruits de Mer',
        desc: 'Temps libre pour déguster poissons et fruits de mer frais grillés au marché du port.',
      },
      {
        time: '14h30',
        title: 'Plage & Temps Libre',
        desc: 'Détente sur la grande plage d\'Essaouira. Possibilité de surf, kite-surf ou promenade à cheval sur le sable (en option).',
      },
      {
        time: '17h00',
        title: 'Retour vers Marrakech',
        desc: 'Départ d\'Essaouira et route retour confortable. Arrivée à Marrakech vers 19h30.',
      },
    ],
  },
  {
    id: 'atlas',
    title: 'Atlas & Ouarzazate',
    tag: 'Aventure',
    desc: 'Kasbah Aït Benhaddou, gorges du Todra et paysages grandioses.',
    image: atlasImg,
    heroImage: atlasImg,
    duration: '2 Jours / 1 Nuit',
    overview: `Traversez le majestueux Haut Atlas et découvrez les paysages grandioses du sud marocain. Du col vertigineux du Tizi n'Tichka aux gorges spectaculaires du Todra, en passant par la légendaire kasbah d'Aït Benhaddou et la "porte du désert" Ouarzazate, ce circuit est une immersion totale dans les décors qui ont inspiré Hollywood et dans la culture berbère ancestrale.`,
    included: [
      'Transport en véhicule 4x4 climatisé',
      'Chauffeur-guide expérimenté',
      '1 nuit en kasbah-hôtel à Ouarzazate',
      'Petit-déjeuner',
      'Visite d\'Aït Benhaddou',
      'Arrêts photos panoramiques',
    ],
    excluded: [
      'Déjeuners et dîners',
      'Boissons',
      'Pourboires',
      'Entrées aux monuments',
      'Balade à dos de mulet (option)',
    ],
    itinerary: [
      {
        time: 'Jour 1 - 7h30',
        title: 'Départ & Col du Tizi n\'Tichka',
        desc: 'Départ de Marrakech direction le sud. Montée spectaculaire du col du Tizi n\'Tichka à 2 260m d\'altitude avec vues panoramiques sur l\'Atlas.',
      },
      {
        time: 'Jour 1 - 10h30',
        title: 'Aït Benhaddou - UNESCO',
        desc: 'Visite guidée de la célèbre kasbah en pisé, décor de Gladiator, Game of Thrones et Lawrence d\'Arabie. Exploration libre du ksar et montée au sommet pour une vue à 360°.',
      },
      {
        time: 'Jour 1 - 14h00',
        title: 'Ouarzazate & Studios Atlas',
        desc: 'Arrivée à Ouarzazate et visite optionnelle des studios Atlas, le "Hollywood de l\'Afrique". Visite de la kasbah Taourirt aux architectures de terre exceptionnelles.',
      },
      {
        time: 'Jour 1 - Soir',
        title: 'Nuit en Kasbah-Hôtel',
        desc: 'Installation dans un magnifique hôtel-kasbah et soirée détente avec vue sur les montagnes et la palmeraie.',
      },
      {
        time: 'Jour 2 - 8h00',
        title: 'Vallée du Dadès & Gorges',
        desc: 'Route vers la vallée du Dadès aux formations rocheuses spectaculaires (les "doigts de singe"). Arrêts photos dans les villages de terre ocre.',
      },
      {
        time: 'Jour 2 - 11h00',
        title: 'Gorges du Todra',
        desc: 'Arrivée aux gorges du Todra : un canyon de 300m de haut pour seulement 10m de large. Promenade au cœur des falaises et possibilité d\'escalade.',
      },
      {
        time: 'Jour 2 - Après-midi',
        title: 'Retour vers Marrakech',
        desc: 'Route retour par un itinéraire différent à travers la vallée des Roses (selon la saison) et les villages berbères. Arrivée à Marrakech en soirée.',
      },
    ],
  },
]

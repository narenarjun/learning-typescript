const profile = {
  name: 'arjun',
  age: 18,
  coords: {
    lat: 32,
    lng: 124,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

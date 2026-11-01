import { View, Text, Image, StyleSheet } from 'react-native';

const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image
          style={styles.banner}
          resizeMode="cover"
          source={require('./assets/banner.png')}
        />
        <View style={styles.body}>
          <View style={styles.headerRow}>
            <View>
              <Image style={styles.avatar} source={require('./assets/avatar.png')} />
              <View style={styles.onlineBadge} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.name}>Francisco Cardenas</Text>
              <Text style={styles.role}>Student</Text>
              <Text style={styles.location}>Jalisco, Mexico</Text>
            </View>
          </View>

          <Text style={styles.bio}>{BIO}</Text>

          <View style={styles.statsRow}>
            {STATS.map((item, index) => (
              <View
                key={item.label}
                style={[styles.stat, index < STATS.length - 1 && styles.statDivider]}
              >
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={styles.statLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.tags}>
            {SKILLS.map((skill) => (
              <View key={skill} style={styles.tag}>
                <Text style={styles.tagText}>{skill}</Text>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <View style={[styles.button, styles.buttonPrimary]}>
              <Text style={styles.buttonPrimaryText}>Follow</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Message</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingTop: 64, paddingHorizontal: 20, backgroundColor: '#EEF1F6' },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  banner: { 
    width: '100%', 
    height: 120 
  },
  body: { 
    paddingHorizontal: 20, 
    paddingBottom: 20 
  },
  headerRow: { 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    marginTop: -40 
  },
  avatar: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    borderWidth: 4, 
    borderColor: '#FFFFFF' 
  },
  onlineBadge: {
    position: 'absolute', 
    right: 4, 
    bottom: 4, 
    width: 18, 
    height: 18,
    borderRadius: 9, 
    backgroundColor: '#22C55E', 
    borderWidth: 3, 
    borderColor: '#FFFFFF',
  },
  headerText: { 
    marginLeft: 14, 
    paddingBottom: 4 
  },
  name: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: '#111827' 
  },
  role: { 
    fontSize: 14, 
    color: '#4B5563' 
  },
  location: { 
    fontSize: 13, 
    color: '#6B7280' 
  },
  bio: { 
    marginTop: 16, 
    fontSize: 14, 
    lineHeight: 20, 
    color: '#374151' 
  },
  statsRow: { 
    flexDirection: 'row', 
    marginTop: 20 
  },
  stat: { 
    flex: 1, 
    alignItems: 'center'
   },
  statDivider: { 
    borderRightWidth: 1, 
    borderRightColor: '#E5E7EB' 
  },
  statValue: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#111827' 
  },
  statLabel: { 
    fontSize: 12, 
    color: '#6B7280' 
  },
  tags: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 8, 
    marginTop: 16 
  },
  tag: { 
    backgroundColor: '#E0E7FF', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 999 
  },
  tagText: { 
    fontSize: 12, 
    color: '#3730A3' 
  },
  actions: { 
    flexDirection: 'row', 
    gap: 12, 
    marginTop: 20 
  },
  button: {
    flex: 1, 
    alignItems: 'center', 
    paddingVertical: 12,
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#D1D5DB',
  },
  buttonPrimary: { 
    backgroundColor: '#4F46E5', 
    borderColor: '#4F46E5' 
  },
  buttonText: { 
    color: '#111827', 
    fontWeight: '600' 
  },
  buttonPrimaryText: { 
    color: '#FFFFFF', 
    fontWeight: '600' 
  },
});
// import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>HI, Admin</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.textContainer}>
          <Text style={styles.aboutText}>
            Welcome to Stock Sensei!
          </Text>
        </View>

        {/* Additional Information Sections */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Deep Learning</Text>
          <Text style={styles.cardDescription}>Our deep learning app provides a detailed analysis of the nifty 50 stocks which is trained on the lstm app and then it fetches the data from the yahoofinance and give the predictions  for the next n days as mentioned.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Natural Language Processing</Text>
          <Text style={styles.cardDescription}>Our Nlp is divided into two parts of the main functionality of the stock market
           {"\n\n"}1.Fetching Headlines from the times of india website and give it a recommedation based on finbert model and give buy,hold or sell 
           {"\n\n"}2.Reading annual reports can be boring so we have our llm based summarisation model which helps to summarise the annual reports and giving financial metrics and giving a flag - buy,hold or sell</Text>
        </View>
        
        {/* Repeat similar blocks as needed */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headerText: {
    color: '#00FF00', // Neon green
    fontSize: 24,
    paddingTop: 40,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  textContainer: {
    backgroundColor: '#2E2E2E', // Darker gray for contrast
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  aboutText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#333333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    color: '#00FF00',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#CCCCCC',
    fontSize: 14,
  },
});

export default App;

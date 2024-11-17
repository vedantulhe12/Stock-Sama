import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import apiService from "../../services/apiService";

const App = () => {
  const [articleLink, setArticleLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [headline, setHeadline] = useState("");
  const [prediction, setPrediction] = useState("");

  
  const handleSubmit = async () => {
    if (!articleLink) {
      return Alert.alert('Please enter a description');
    }

    const formData = new FormData();
    formData.append('url', articleLink); // Add description to formData

    try {
      const response = await apiService.post('/predict_recommendation', formData );

      if (response.status === 200) {
        setHeadline(response.headline);
    setPrediction(response.prediction);
    setSubmitted(true);
      } else {
        Alert.alert('Error', response.data.error || 'An error occurred');
      }
    } catch (error) {
      Alert.alert('Error', response.data.error || 'An error occurred.');
    }
  };
  // const handleSubmit = async () => {
  //   const res = await <apiService className="post"></apiService>({url:articleLink});
  //   console.log(res);
  //   setHeadline(res.headline);
  //   setPrediction(res.prediction);
  //   setSubmitted(true);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>HI, Admin!</Text>
        </View>

        {/* Sentiment & Recommendation Section */}
        <View style={styles.recommendationCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>💎</Text>
          </View>
          <Text style={styles.recommendationTitle}>
            Sentiment & Recommendation
          </Text>
          <Text style={styles.processingText}>Stock Analysis</Text>
        </View>

        {/* Article Submission Section */}
        <View style={styles.articleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your article url here"
            placeholderTextColor="#888"
            value={articleLink}
            onChangeText={setArticleLink}
          />
        </View>

        {/* Submitted Status */}
        {submitted && (
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Headline</Text>
            <Text style={styles.analysisText}>
              ✅ {headline}
            </Text>
          </View>
        )}
        
        {/* Prediction Result */}
        {submitted && (
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Recommendation</Text>
            <Text style={styles.analysisText}>
              We would recommend you to {prediction} your stocks!
            </Text>
          </View>
        )}

        {/* Result Section */}
          <TouchableOpacity style={styles.resultContainer} onPress={handleSubmit}>
            <Text style={styles.resultText}>Result</Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    padding: 16,
    marginTop: 50,
  },
  headerText: {
    color: "#00FF00", // Neon green
    fontSize: 24,
    fontWeight: "bold",
  },
  articleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  articleLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    fontSize: 13,
  },
  submitButton: {
    backgroundColor: "#990000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
	fontSize: 16
  },
  statusCard: {
    backgroundColor: "#333333",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  statusTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  statusSubtitle: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  statusDescription: {
    color: "#AAAAAA",
    fontSize: 14,
    marginTop: 8,
  },
  analysisContainer: {
    backgroundColor: "#333333",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  analysisText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  recommendationCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 10,
  },
  icon: {
    fontSize: 40,
    color: "#00FF00", // Green diamond icon
  },
  recommendationTitle: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  processingText: {
    color: "#000000",
    fontSize: 14,
    marginTop: 8,
  },
  resultContainer: {
    backgroundColor: "#068057",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  resultText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default App;

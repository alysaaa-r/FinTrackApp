import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CollaborationFeature = () => {
  const [email, setEmail] = useState("");
  const [collaborators, setCollaborators] = useState([
    { id: "1", name: "Sophia Bennett", role: "View Only", image: "https://i.pravatar.cc/100?img=1" },
    { id: "2", name: "Ethan Carter", role: "Can Edit", image: "https://i.pravatar.cc/100?img=2" },
    { id: "3", name: "Olivia Davis", role: "View Only", image: "https://i.pravatar.cc/100?img=3" },
  ]);

  const [selected, setSelected] = useState(null);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  // 🔹 New States for Category Access
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [categories, setCategories] = useState([
    { id: "1", name: "Groceries", checked: false },
    { id: "2", name: "Utilities", checked: false },
    { id: "3", name: "Transportation", checked: false },
    { id: "4", name: "Rent", checked: false },
    { id: "5", name: "Entertainment", checked: false },
  ]);
  const [selectAll, setSelectAll] = useState(false);

  const handleInvite = () => {
    if (email.trim()) {
      const newCollaborator = {
        id: Math.random().toString(),
        name: email.split("@")[0],
        role: "View Only",
        image: "https://i.pravatar.cc/100",
      };
      setCollaborators([...collaborators, newCollaborator]);
      setEmail("");
    }
  };

  const handleDelete = (id) => {
    setCollaborators(collaborators.filter((c) => c.id !== id));
    setMenuVisible(false);
  };

  const handleEdit = (collab) => {
    setEditName(collab.name);
    setEditRole(collab.role);
    setSelected(collab);
    setEditModalVisible(true);
    setMenuVisible(false);
  };

  const handleSave = () => {
    setCollaborators((prev) =>
      prev.map((c) =>
        c.id === selected.id ? { ...c, name: editName, role: editRole } : c
      )
    );
    setEditModalVisible(false);
  };

  // 🔹 New functions for Category Modal
  const toggleCategory = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, checked: !cat.checked } : cat
      )
    );
  };

  const toggleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setCategories((prev) =>
      prev.map((cat) => ({ ...cat, checked: newValue }))
    );
  };

  const handleDone = () => {
    setCategoryModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collaboration</Text>

      {/* Invite Collaborators */}
      <Text style={styles.sectionTitle}>Invite Collaborators</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.inviteButton} onPress={handleInvite}>
        <Text style={styles.inviteButtonText}>Send Invite</Text>
      </TouchableOpacity>

      {/* Share a link */}
      <Text style={styles.sectionTitle}>Share a link</Text>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>https://yourapp.com/invite/a3f8g</Text>
        <Ionicons name="copy-outline" size={20} color="#bbb" />
      </View>

      {/* Current Collaborators */}
      <Text style={styles.sectionTitle}>Current Collaborators</Text>
      <FlatList
        data={collaborators}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.collaboratorItem}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setSelected(item);
                setMenuVisible(true);
              }}
            >
              <Ionicons name="ellipsis-vertical" size={18} color="#aaa" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Category Access Section */}
      <Text style={styles.sectionTitle}>Category Access</Text>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => setCategoryModalVisible(true)}
      >
        <Text style={styles.categoryButtonText}>Change</Text>
      </TouchableOpacity>

      {/* 🔹 Category Modal */}
      <Modal visible={isCategoryModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.categoryModal}>
            <Text style={styles.modalTitle}>Category Access</Text>
            <Text style={{ color: "#bbb", marginBottom: 15 }}>
              Select the expense categories you want to share with your collaborators.
            </Text>

            <ScrollView>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={toggleSelectAll}
              >
                <Text style={styles.categoryText}>Select All</Text>
                <Ionicons
                  name={selectAll ? "checkbox" : "square-outline"}
                  size={22}
                  color="#4ea8de"
                />
              </TouchableOpacity>

              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  style={styles.categoryItem}
                  onPress={() => toggleCategory(cat.id)}
                >
                  <Text style={styles.categoryText}>{cat.name}</Text>
                  <Ionicons
                    name={cat.checked ? "checkbox" : "square-outline"}
                    size={22}
                    color="#4ea8de"
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Edit/Delete Menu */}
      <Modal transparent={true} visible={isMenuVisible} animationType="fade">
        <Pressable style={styles.modalBackground} onPress={() => setMenuVisible(false)}>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => handleEdit(selected)}>
              <Text style={styles.menuItem}>✏️ Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(selected.id)}>
              <Text style={[styles.menuItem, { color: "#ff6b6b" }]}>🗑️ Delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

      {/* Edit Modal */}
      <Modal transparent={true} visible={isEditModalVisible} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.editModal}>
            <Text style={styles.modalTitle}>Edit Collaborator</Text>
            <TextInput
              style={styles.input}
              value={editName}
              onChangeText={setEditName}
              placeholder="Name"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              value={editRole}
              onChangeText={setEditRole}
              placeholder="Role (e.g., View Only)"
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.inviteButton} onPress={handleSave}>
              <Text style={styles.inviteButtonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEditModalVisible(false)}>
              <Text style={{ color: "#bbb", textAlign: "center", marginTop: 10 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Bottom Navigation (Mock) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid-outline" size={22} color="#bbb" />
          <Text style={styles.navLabel}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="receipt-outline" size={22} color="#bbb" />
          <Text style={styles.navLabel}>Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="people-outline" size={22} color="#4ea8de" />
          <Text style={[styles.navLabel, { color: "#4ea8de" }]}>Collaboration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#bbb" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CollaborationFeature;

// ✅ STYLES — keep your existing ones, just add these at the bottom:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#1e293b",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  inviteButton: {
    backgroundColor: "#4ea8de",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  inviteButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  linkContainer: {
    backgroundColor: "#1e293b",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  linkText: {
    color: "#bbb",
    fontSize: 14,
  },
  collaboratorItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  role: {
    color: "#bbb",
    fontSize: 14,
  },
  categoryButton: {
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  categoryButtonText: {
    color: "#4ea8de",
    fontWeight: "600",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryModal: {
    backgroundColor: "#1b263b",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#2a3b52",
  },
  categoryText: {
    color: "#fff",
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: "#4ea8de",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  menuContainer: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  menuItem: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 8,
  },
  editModal: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 12,
    width: "90%",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: "#334155",
    backgroundColor: "#0f172a",
  },
  navItem: {
    alignItems: "center",
  },
  navItemActive: {
    alignItems: "center",
  },
  navLabel: {
    color: "#bbb",
    fontSize: 12,
    marginTop: 4,
  },
});